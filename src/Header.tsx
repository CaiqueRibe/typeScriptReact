export type Props ={
    title: string
    color?: string
}

const Header = ({title, color, ...props}: Props) => {
    return (
        <header>
            <h1 style={{color: color ? color : 'blue'}}>{title}</h1>
        </header>
    )
}

export default Header