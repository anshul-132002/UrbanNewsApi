import React from "react";

const NewsItem =(props)=> {
    let {
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      date,
      source,
    } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span class=" badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://d3i6fh83elv35t.cloudfront.net/static/2022/10/2022-01-03T185645Z_291125850_RC2NRR9FV96L_RTRMADP_3_THERANOS-HOLMES-1024x682.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}.....</p>
            <div class="card-footer">
              <small class="text-danger">
                by {!author ? "  Unknown author " : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </div>
            <a
              rel="noopener noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              {" "}
              Read More{" "}
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
