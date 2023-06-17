import { FC } from "react"
import SearchBar from "@/components/search/SearchBar"
import XFilter from "@/components/XFilter"

const Catalogue:FC<any> = () => {
  return (
    <div className="catalogue mt-12 padding-x padding-y max-width" id="discover">
        
        <div className="home__text-container">
            <h2 className="text-4x1 font-extrabold">
                Car Catalogue
            </h2>
            <p className="subtitle">
                Explore the cars you might like
            </p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <XFilter title="fuel"/>
            <XFilter title="year"/>
          </div>
        </div>

    </div>
  )
}

export default Catalogue
