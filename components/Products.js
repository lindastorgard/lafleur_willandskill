/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const Products = ({ section }) => {
  return (
    <article 
      sx={{
        backgroundColor: "#F4F9FA",
        py: [null, 5, 7],
      }}
    >
      <div 
        sx={{ 
          maxWidth: "1000px",
          margin: "auto",
          display: "flex",
          flexDirection: ["column", "row", null],
          flexWrap: "wrap",
          justifyContent: "center"
          }}
        >
        {section.map((flower, id) => (
          <div 
            key={id}
            sx={{
              cursor: "pointer", 
              position: "relative",
              mb: 6
            }}
          >
            <Link as={`/flower/${id}`} href={`/flower/${id}`}>
              <div 
                sx={{
                  width: [null, "250px", null],
                  height: ["350px", "380px", null],
                  margin: 2,
                  overflow: "hidden",
                  borderRadius: "5px",
                  "&:hover > img": {
                    transform: "scale(1.1)",
                  }
                }}
              >
                {flower.cover_image !== "" && (
                  <img 
                    src={flower.cover_image}
                    alt={flower.common_name}
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                      height: "90%",
                      transition: "all .7s",
                    }}
                  />
                )}
                {flower.cover_image === "" && (
                  <img 
                    src="/noimage.png"
                    alt="no image"
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                      height: "90%",
                      transition: "all .7s",
                    }}
                  />
                )}
                <div 
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "#F4F9FA",
                    overflow: "hidden",
                    width: [null, "250px", null],
                    margin: 2,
                    height: "10%",
                    transition: "0.5s ease",
                    "&:hover": {
                      height: "26%"
                    }
                  }}
                >
                  <p sx={{fontWeight: "bold", mx: 2 }}>{flower.common_name}</p>
                  <div sx={{display: "flex", justifyContent:"space-between", px: 2 }}>
                    <div>Latin name:
                      <p sx={{ m: 0 }}>{flower.latin_name}</p>
                    </div>
                    <div>Blooms in:
                      <p sx={{ m: 0 }}>{flower.blooming_season}</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Products;