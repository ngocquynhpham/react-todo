import { useEffect, useState } from "react";
import { IItemReview } from "../../movies/type";
import "./CardReview.scss";
import { Clock8, Star, StarHalf } from "lucide-react";
import { formatDate } from "../../utils/datatime";

const CardReview = (props: IItemReview) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  // render star follow countRating;
  // const finalArrayStar;
  const defaultNum: number = 5;
  const countRating: number = props.rating;
  const star: number = Math.floor(countRating);
  const starHaft: number = Math.round(countRating % 2);
  const starNull: number = Math.floor(defaultNum - countRating);
 
  useEffect(() => {
    let img = new Image();
    img.src = props.reviewer.avt;

    img.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  return (
    isLoaded && (
      <div className="wrap-card">
        <div className="review">
          <div className="review__head">
            <div className="flex flex-auto items-center gap-2">
              <img
                className="avt-reviewer"
                src={props.reviewer.avt}
                alt={props.reviewer.name}
              />
              <div className="flex gap-1 flex-col items-start">
                <span className="font-bold text-base">
                  {props.reviewer.name}
                </span>
                <span className="text-gray-300 opacity-90 italic text-sx">
                  @{props.reviewer.userName}
                </span>
              </div>
            </div>
            <div className="flex gap-1">
              {Array.from(Array(star).keys()).map((index:number)=>{
                return <Star key={index} fill="#F97316" strokeWidth={0} />
              })}
              {Array.from(Array(starHaft).keys()).map((index:number)=>{
                return <StarHalf key={index} fill="#F97316" strokeWidth={0} />
              })}

              {Array.from(Array(starNull).keys()).map((index:number)=>{
                return <Star key={index} fill="#111" strokeWidth={0} />
              })}
              {/* <Star fill="#F97316" strokeWidth={0} />
              <Star fill="#F97316" strokeWidth={0} />
              <Star fill="#111" strokeWidth={0} />
              <Star fill="#111" strokeWidth={0} />
              <Star fill="#111" strokeWidth={0} /> */}
            </div>
          </div>
          <div className="review__body">
            <p className="content truncate">{props.content}</p>
          </div>
          <div className="review__footer">
            <Clock8 strokeWidth={1} color="#cecece" size={18} />
            <span className="text-gray-300 opacity-90 italic text-sx">
              {formatDate(new Date(props.review_at))}
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default CardReview;
