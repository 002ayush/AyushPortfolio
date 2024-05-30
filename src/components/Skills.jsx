
import { Rating } from "@mui/material";

function Skills() {
  // const useStyles = makeStyles({
  //   iconFilled: {
  //     color: "red", // Color for filled stars
  //   },
  //   iconHover: {
  //     color: "blue", // Color for hovered stars
  //   },
  // });
  // const classes = useStyles();
  return (
    <>
      <div className="msm:text-3xl text-blue-700 xsm:relative xsm:mt-20 sm:text-lg  msm:mt-8">
        Ski<span className="text-white">lls</span>
        <ul className="relative xsm:mt-10 msm:mt-10">
          <li className="flex xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11   msm:justify-between">
            <div>
              C<span className="text-white">++</span>
            </div>
            <div>
            <Rating name="read-only" value={4} readOnly />
            </div>
          </li>
          <li className="flex   xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11    msm:justify-between">
            <div>
              Ja<span className="text-white">va</span>
            </div>
            <div>
              <Rating name="read-only" value={2} readOnly />
            </div>
          </li>
          <li className="flex xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11  msm:justify-between">
            <div>
              Pyt<span className="text-white">hon</span>
            </div>
            <div>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </li>
          <li className="flex  xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11 msm:justify-between">
            <div>
              Java<span className="text-white">Script</span>
            </div>
            <div>
              <Rating name="read-only" value={4} readOnly />
            </div>
          </li>
          <li className="flex   xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11  msm:justify-between">
            <div>
              Kot<span className="text-white">lin</span>
            </div>
            <div>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </li>
          <li className="flex   xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11   msm:justify-between">
            <div>
              React<span className="text-white">JS</span>
            </div>
            <div>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </li>
          <li className="flex   xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11   msm:justify-between">
            <div>
              Mongo<span className="text-white">DB</span>
            </div>
            <div>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </li>
          <li className="flex  xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11  msm:justify-between">
            <div>
              My<span className="text-white">SQL</span>
            </div>
            <div>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Skills;
