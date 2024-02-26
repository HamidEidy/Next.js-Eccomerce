const getBlurDataURL = ():string => {
    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAC3ARIDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAFhABAQEAAAAAAAAAAAAAAAAAABEB/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A+KA5OoAAAKAiACAIqAiKgJrOtM6CazrWs6qM6mrrOtMprOtazqomouo0yKigrTKo00qLiKqoIqgCgCD2CCCoAAgCiCKCACCAIrIGs6upoJrOrqaqJrOrrOtMpqaus6qaII0yqsqDWLjOLiNNYqYqKqoIrQgCiAr1FSlQWlSlQWlSlBaVmlFWiVKgqFSgJulSgJpus7qoamm6zohrOrus60hrOrrOqzogNMqIA1jTGNI00rOKitCArQlEVRAHppWaVBqlZpQapWaVFaqVKlBqpUqUGqlSpQWpUqUF3UqVN0DdTdKzuqi7rO6brO6rJupum6jTOggqKIoLVzWVorVarFWorVWs1aitDNKK1RmgPRSs0rKtUrNKDVSs0oNUrNSordSs1KDVKzUoNVKzSiLU3UqbqwWs7qbqbqxld1ndN1GomgIqKIAogCqyoi1ayCt1axSi1ulZpUK1RmgV3pWaVhtqlZqUG6VilBqlZqUGqVmpVg1Ss1KQaqVmlWItSpUqxKtSoKgAIAAAAAAAAAAogC0qALRAHWlZpWY21Ss0pBqpUpSC0rIC0qClKCCVUEVKACAAAAAAAAAAAAAAAAAAAANCCNKIAogCiAKgAAKiACAAAAAAAAAAAAAAAAAAAAAAKKCoKAgoigAAAqCgiIoqIAIAAAAAAAAAAAAAAAAAAAA2KCoKAiqIrI0CswaRFRGkBBUVERRWdQAQAAAAAAAAAAAAAAAAAB1FAQUFAEUFEVEUFRGkQRFRREXUVnUAVkAAAAAAAAAAAAAAAAAB2AAUBQBFAEUARUQAEBRGQVNQBWAAAAAAAAAAAAAAAAAAH//Z"
}
const numberFormat = (number: number):number | string =>{
    return new Intl.NumberFormat().format(number);
}
const handleError = (message: any) => {
    if (typeof message === 'object') {
        const errors: any[] = [];
        Object.keys(message).map(key => {
            message[key].map((e: any) => {
                errors.push(e)
            })
        })
        return errors.join();
    }
    return message;
}
const salePercent = (price:number, salePrice:number):number => {
    return Math.round(((price - salePrice) / price) * 100);
}
export {getBlurDataURL, numberFormat, handleError, salePercent}