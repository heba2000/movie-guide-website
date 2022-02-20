import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from 'formik'

function Search(props) {
    const formik = useFormik({
        initialValues: {
            searchTerm: ""
        },
        onSubmit: (values) => {
            props.onSubmit({
                searchTerm: values.searchTerm
            })
        }
    });

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="input-group">
                    <input type="text" className=" py-2 form-control search-Inp" placeholder="Search"
                        name= "searchTerm"
                        value={formik.values.searchTerm}
                        onChange={formik.handleChange}
                    />
                    <button className="py-2 btn btn-default text-white" type="submit">
                        Search
                        <FontAwesomeIcon icon="search" className='text-white mx-2' />
                    </button>
                </div>
            </form>
        </div>

    );
}

export default Search;

