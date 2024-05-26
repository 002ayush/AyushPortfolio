import Rating from "@mui/material/Rating";

function Skills() {
  return (
    <>
      <div className="msm:text-3xl xsm:relative xsm:mt-20 sm:text-lg  msm:mt-8">
        Skills
        <ul className="relative xsm:mt-10 msm:mt-10">
          <li className="flex  xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11   msm:justify-between">
            <div>C++</div>
            <div>
              <Rating name="read-only" value={4} readOnly />
            </div>
          </li>
          <li className="flex   xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11    msm:justify-between">
            <div>Java</div>
            <div>
              <Rating name="read-only" value={2} readOnly />
            </div>
          </li>
          <li className="flex xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11  msm:justify-between">
            <div>Python</div>
            <div>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </li>
          <li className="flex  xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11 msm:justify-between">
            <div>JavaScript</div>
            <div>
              <Rating name="read-only" value={4} readOnly />
            </div>
          </li>
          <li className="flex   xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11  msm:justify-between">
            <div>Kotlin</div>
            <div>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </li>
          <li className="flex   xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11   msm:justify-between">
            <div>ReactJS</div>
            <div>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </li>
          <li className="flex   xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11   msm:justify-between">
            <div>MongoDb</div>
            <div>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </li>
          <li className="flex  xsm:text-center xsm:ml-24 xsm:justify-between xsm:mr-11  msm:justify-between">
            <div>MySql</div>
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
