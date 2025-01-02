export const imgURLParse = (url: string) => {
    return `${process.env.NEXT_PUBLIC_API_URL}/product/image/${url}`
}