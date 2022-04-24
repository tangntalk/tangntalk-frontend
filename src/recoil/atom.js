import { atom } from 'recoil';

export const authorized = atom({
    key: 'authorized',
    default: true,
});