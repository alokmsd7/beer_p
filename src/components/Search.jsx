import "../sassStyles/components/_search.scss"

export default function Search(props) {
    const { radioClick, submitClick, textInput } = props
    const { searchBar, searchMethod, searchMethodName } = props.form

    return (
        <>
            <div className="search">
                <h3>Search for breweries by {searchMethodName}:</h3>
                <form className="search-form" onSubmit={submitClick}>
                    <div className="search-radio-buttons">
                        <label name="searchMethod">
                            <input type="radio"
                                id="name"
                                name="searchMethod"
                                value="by_name"
                                checked={searchMethod === "by_name"}
                                onChange={radioClick} />
                            Brewery name
                        </label>

                        <label name="searchMethod">
                            <input type="radio"
                                id="city"
                                name="searchMethod"
                                value="by_city"
                                checked={searchMethod === "by_city"}
                                onChange={radioClick} />
                            City
                        </label>

                        <label name="searchMethod">
                            <input type="radio"
                                id="state"
                                name="searchMethod"
                                value="by_state"
                                checked={searchMethod === "by_state"}
                                onChange={radioClick} />
                            State
                        </label>

                        <label name="searchMethod">
                            <input type="radio"
                                id="post code"
                                name="searchMethod"
                                value="by_postal"
                                checked={searchMethod === "by_postal"}
                                onChange={radioClick} />
                            ZIP/Postal code
                        </label>

                        <label name="searchMethod">
                            <input type="radio"
                                id="country"
                                name="searchMethod"
                                value="by_country"
                                checked={searchMethod === "by_country"}
                                onChange={radioClick} />
                            Country
                        </label>
                    </div>
                    <div className="search-field-and-button">
                        <input
                            type="text"
                            name="searchBar"
                            placeholder="Enter text"
                            className="search-bar"
                            onChange={textInput}
                            value={searchBar}
                        />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}