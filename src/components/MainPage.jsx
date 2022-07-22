import React from 'react'
import "../styles/mainpage.css"
import Header from './Header'
import { useState, useEffect, useRef } from "react"
import axios from "axios"
import OneImage from './OneImage'
import ReactPaginate from "react-paginate"
import { Link } from "react-router-dom"

function MainPage(props) {

    var page = 0
    const [data, setData] = useState([])
    const length = useRef(0)
    useEffect(() => {
        axios.get("https://server-nine-eosin.vercel.ap/images/length").then((res) => {
            length.current = res.data.length
        })
    }, [])

    useEffect(() => {
        const Pagination = () => {
            axios.get("https://server-nine-eosin.vercel.ap/images?page=1").then((res) => {
                setData(res.data.data.images)
            }).catch(err => {
                window.alert("No more images available !!")
                setTimeout(() => window.open("/", "_self"), 1500)
            })
        };
        Pagination()
    }, [])

    var pagination = async (page) => {
        const res = await axios.get(`https://server-nine-eosin.vercel.ap/images?page=${page}`)
        return res.data.data.images
    };
    const handlePageClick = async (val) => {
        page = val.selected + 1
        const x = await pagination(page)
        setData(x)
    }
    let num = parseInt(length.current / 2)
    return (
        <div className='mainpage'>
            <div className="mainnew">
                <Header />
                <div className="downnew">
                    {
                        data.map((el => <OneImage key={el.imgName} img={el} />))
                    }
                </div>
            </div>
            <div className="next">
                <ReactPaginate previousLabel={'prev'} nextLabel={'next'} breakLabel={'...'} pageCount={num} marginPagesDisplayed={2} pageRangeDisplayed={2} onPageChange={handlePageClick} containerClassName={'pagination justify-content-center'} pageClassName={'page-item'} pageLinkClassName={'page-link'} previousClassName={'page-item'} previousLinkClassName={'page-link'} nextClassName={'page-item'} nextLinkClassName={'page-link'} breakClassName={'page-item'} breakLinkClassName={'page-link'} activeClassName={'active'} />
                <Link to="/fill" className="nxtbtnn">Add Image</Link>
            </div>
        </div >
    )
}

export default MainPage