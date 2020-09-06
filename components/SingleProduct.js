/** @jsx jsx */
import { jsx } from "theme-ui";

const SingleProduct = ({ flower }) => {
  return (
    <section
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        backgroundColor: "#F4F9FA",
        pt: "60px"
      }}
    >
      <div
        sx={{
          flex: 1,
          p: [3, 4, 6],
        }}
      >
        <div sx={{width: "100%", height: "100%"}}>
          <img 
            src={flower.cover_image} 
            alt={flower.common_name} 
            sx={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "5px",
            }} 
          />
        </div>
      </div>
      <div
        sx={{
          flex: 1,
          p: [3, 4, 6],
          alignSelf: "center",
        }}
      >
        <h1 
          sx={{ 
            m: 0,
            fontSize: 5,
            fontFamily: "heading",
            fontWeight: "body" 
          }}
        >
          {flower.common_name}
        </h1>
        <p>Latin name: {flower.latin_name}</p>
        
        <div sx={{ my: 5 }}>
          <h2 
            sx={{ 
              m: 0,
              fontSize: 3,
              fontFamily: "heading",
              fontWeight: "body" 
            }}
          >
            Facts
          </h2>
          <p>{flower.notes}</p>
          <ul sx={{pl: 3, textTransform: "capitalize"}}>
            <li>Blooming season: {flower.blooming_season}</li>
            {flower.sun? (
              <li>Sun: yes</li>
            ) : (
              <li>Sun: no</li>
            )}
            <li>Soil: {flower.soil}</li>
            <li>Depth: {flower.depth.numberInt}</li>
            <li>Height: {flower.height.map((height) => height.numberInt)}</li>
            <li>Spacing: {flower.spacing.numberInt}</li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default SingleProduct;