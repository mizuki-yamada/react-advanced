const style = {
    width: "100%",
    height: "200px",
    backgroundColor:"pink",
}

export const ChildArea = (props) => {
    const { open } = props
    return (
        <div style={style}>
        {open ? ("aaaaa"):null}
        </div>
    )
}