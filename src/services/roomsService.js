import { post, get, patch, del } from "../utils/request"

export const createRoom = async (options) => {
    const result = await post("rooms", options);
    return result;
}

export const getRooms = async () => {
    const result = await get("rooms");
    return result;
}

export const editRoom = async (id, options) => {
    const result = await patch(`rooms/${id}`, options);
    return result;
}

export const delRoom = async (id) => {
    const result = await del(`rooms/${id}`);
    return result;
}