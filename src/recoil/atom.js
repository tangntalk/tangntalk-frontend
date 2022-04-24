import { atom } from 'recoil';

export const authorized = atom({
    key: 'authorized',
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
});