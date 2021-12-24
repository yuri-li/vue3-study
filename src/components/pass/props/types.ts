interface Member {
    id: string,
    age: number,
    gender: boolean,
}

interface ChildExpose {
    address?: string,
    username: string,
    sayHello: () => void
}

export { Member, ChildExpose }