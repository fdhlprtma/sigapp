type titleProps = {
    children: string
}
function Title({ children }: titleProps) {
    return (
        <>
            <h1 className="text-xl font-medium text-center mt-10 mb-8">{children}</h1>
        </>
    )
}

export default Title