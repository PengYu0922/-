import httpInstance from '@/utiles/request'

export function getMusicAPI() {
    return httpInstance({
        url: '/music'
    })
}