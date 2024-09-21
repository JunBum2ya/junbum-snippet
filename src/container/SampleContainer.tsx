import Sample from "../component/sample/Sample";
import {connect} from "react-redux";
import {getPost, getUsers} from "../modules/sample/actions";
import {Post, SampleState, User} from "../modules/sample/types";
import {useEffect} from "react";

const SampleContainer = ({getPost, getUsers, post, users, loadingPost, loadingUsers}: SampleContainerProps) => {
    useEffect(() => {
        getPost(1);
        getUsers(1);
    }, [getPost, getUsers]);
    return <Sample loadingPost={loadingPost} loadingUsers={loadingUsers} post={post} users={users}/>
};

type SampleContainerProps = {
    getPost: any,
    getUsers: any,
    post: Post | null,
    users: User[] | null,
    loadingPost: boolean,
    loadingUsers: boolean
}

export default connect(
    ({sample}: { sample: SampleState }) => {
        return ({
            post: sample.post,
            users: sample.users,
            loadingPost: sample.loading.GET_POST,
            loadingUsers: sample.loading.GET_USERS
        })
    }, {
        getPost,
        getUsers
    }
)(SampleContainer);