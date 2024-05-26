import Rating from "@mui/material/Rating";

function Skills() {
  return (
    <>
      <div className="text-3xl absolute top-0">
        Skills
        <ul className="relative top-10">
          <li className="flex justify-between">
            <div>C++</div>
            <div>
              <Rating name="read-only" value={4} readOnly />
            </div>
          </li>
          <li className="flex justify-between">
            <div>Java</div>
            <div>
              <Rating name="read-only" value={2} readOnly />
            </div>
          </li>
          <li className="flex justify-between">
            <div>Python</div>
            <div>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </li>
          <li className="flex justify-between">
            <div>JavaScript</div>
            <div>
              <Rating name="read-only" value={4} readOnly />
            </div>
          </li>
          <li className="flex justify-between">
            <div>Kotlin</div>
            <div>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </li>
          <li className="flex justify-between">
            <div>ReactJS</div>
            <div>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </li>
          <li className="flex justify-between">
            <div>MongoDb</div>
            <div>
              <Rating name="read-only" value={3} readOnly />
            </div>
          </li>
          <li className="flex justify-between">
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
