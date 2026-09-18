const Loader = ({label="Загрузка..."}) => {
    return (
        <div className="loader">
            <div className="loader-content">
                <div className="loader-spinner"></div>
                <p className="loader-text">{label}</p>
            </div>
        </div>
    )
}

export default Loader
