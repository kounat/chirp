import { Db, Collection } from "mongodb";

import { UserModel, FollowsModel } from "../models/user";
import { ItemModel, LikesModel, MediaModel } from "../models/item";

export interface Collections {
    Users: Collection<UserModel>;
    Items: Collection<ItemModel>;
    Follows: Collection<FollowsModel>;
    Likes: Collection<LikesModel>;
    Media: Collection<MediaModel>;
}

const connect = (db: Db) => {
    return {
        Users: db.collection<UserModel>("users"),
        Items: db.collection<ItemModel>("items"),
        Follows: db.collection<FollowsModel>("follows"),
        Likes: db.collection<LikesModel>("likes"),
        Media: db.collection<MediaModel>("media")
    } as Collections;
};

export default connect;
