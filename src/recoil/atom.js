import { atom } from 'recoil';

export const authorized = atom({
    key: 'authorized',
<<<<<<< HEAD
    default: 'true',
});

export const isModal = atom({
    key: 'isModal',
    default: false,
});
export const modalComment = atom({
    key: 'modalComment',
    default: '문제가 발생했습니다',
});

export const modalFunction = atom({
    key: 'modalFunction',
    default: null,
=======
    default: true,
>>>>>>> 4254231925713efe0a8fc4542ea7129c338762a4
});