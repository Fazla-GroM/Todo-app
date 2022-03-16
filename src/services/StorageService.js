import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'

class StorageService {
    #storage
    #dbName
    constructor({ dbName = 'default', storageType = 'localStorage' }) {
        this.#checkStorage(storageType)

        this.#storage = this.#createStorage(dbName, storageType)
        this.#dbName = dbName
    }

    #checkStorage(storageType) {
        const storage = window[storageType]

        if (!storage) {
            throw new Error(
                `Storage of type ${storageType} is not available. Available storages are "localStorage" and "sessionStorage`
            )
        }
    }

    #createStorage(dbName, storageType) {
        const storage = window[storageType]

        const db = storage.getItem(dbName)

        if (!db) {
            storage.setItem(dbName, JSON.stringify({}))
        }

        return storage
    }

    #createPromise(callback) {
        const promise = new Promise((resolve, reject) => {
            try {
                const value = callback()

                resolve(value)
            } catch (error) {
                reject(error)
            }
        })

        return promise
    }

    #getDb() {
        const db = JSON.parse(this.#storage.getItem(this.#dbName))
        const formatedDb = this.#nullToUndefined(db)

        return formatedDb
    }

    #setDb(dbPayload) {
        const formatedDb = this.#undefinedToNull(dbPayload)

        return this.#storage.setItem(this.#dbName, JSON.stringify(formatedDb))
    }

    #isObject(value) {
        return typeof value === 'object' && !Array.isArray(value) && value !== null
    }

    #undefinedToNull(db) {
        if (Array.isArray(db)) {
            db.forEach(item => this.#undefinedToNull(item))
        }

        if (this.#isObject(db)) {
            for (let data in db) {
                if (db[data] === undefined) {
                    db[data] = null
                }

                if (Array.isArray(db[data])) {
                    this.#undefinedToNull(db[data])
                }
            }
        }

        return db
    }

    #nullToUndefined(db) {
        if (Array.isArray(db)) {
            db.forEach(item => this.#nullToUndefined(item))
        }

        if (this.#isObject(db)) {
            for (let data in db) {
                if (db[data] === null) {
                    db[data] = undefined
                }

                if (Array.isArray(db[data])) {
                    this.#nullToUndefined(db[data])
                }
            }
        }

        return db
    }

    async createOne(resource, params = {}) {
        return this.#createPromise(() => {
            const db = this.#getDb()

            if (!resource) {
                throw new Error('Resource is required')
            }

            if (!params?.payload) {
                throw new Error('Payload is required in params')
            }

            const data = {
                ...params?.payload,
                createdAt: dayjs().toISOString(),
                isCompleted: false,
                id: uuidv4()
            }

            if (!db[resource]) {
                db[resource] = [data]
            } else {
                db[resource].push(data)
            }

            this.#setDb(db)

            return data
        })
    }

    async getList(resource, params = {}) {
        return this.#createPromise(() => {
            const db = this.#getDb()

            if (!resource) {
                throw new Error('Resource is required')
            }

            return db[resource] || []
        })
    }

    async getOne(resource, params = {}) {
        return this.#createPromise(() => {
            const db = this.#getDb()

            if (!resource) {
                throw new Error('Resource is required')
            }

            if (!params?.id) {
                throw new Error('Id is Required in params')
            }

            const oneData = db[resource]?.find(item => item?.id === params?.id)

            return oneData
        })
    }

    async updateOne(resource, params = {}) {
        return this.#createPromise(() => {
            const db = this.#getDb()

            if (!resource) {
                throw new Error('Resource is required')
            }

            if (!params?.id) {
                throw new Error('Id is Required in params')
            }

            if (!params?.payload) {
                throw new Error('Payload is Required in params')
            }

            let itemToUpdateIndex
            const itemToUpdate = db[resource]?.find((item, itemIndex) => {
                itemToUpdateIndex = itemIndex
                return item?.id === params?.id
            })

            if (!itemToUpdate) {
                throw new Error('Not found')
            }

            //should use deepmerge here for nested stuff
            const updatedItem = {
                ...itemToUpdate,
                ...params?.payload
            }

            db[resource]?.splice(itemToUpdateIndex, 1, updatedItem)

            this.#setDb(db)

            return updatedItem
        })
    }

    async deleteOne(resource, params = {}) {
        return this.#createPromise(() => {
            const db = this.#getDb()

            if (!resource) {
                throw new Error('Resource is required')
            }

            if (!params?.id) {
                throw new Error('Id is Required in params')
            }

            db[resource] = db[resource]?.filter(item => item?.id !== params?.id)

            this.#setDb(db)

            return {}
        })
    }
}

export { StorageService }
