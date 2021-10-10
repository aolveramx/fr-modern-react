import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrid = ({category}) => {

  const {data: imgs, loading} = useFetchGifs(category)

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid">
          {
            imgs.map((img) => (
              <GifGridItem 
              key={img.id}
              {...img}
              />
            ))
          }
      </div>

    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

export default GifGrid
