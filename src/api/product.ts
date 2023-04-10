import instance from ".";
import { IProduct } from "../models";
import { updateForm } from "../models";

export const getAll = async () => {
    const uri = await "/products"
    return instance.get(uri)
}
export const getById = async  (id: number) => {
    const uri = await "/products/" + id
    return instance.get(uri)
}

export const update = async (id: string ,body:updateForm) => {
    const uri = "/products/" + id
    return instance.put(uri,body)
}
export const deleteById = async (id: number) => {
    const uri = "/products/" + id
    return instance.delete(uri)
}