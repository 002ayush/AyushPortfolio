import { Card, CardContent } from "@mui/material";

function CodingProfiles() {
  /*const [easy, setEasy] = useState(0);
  const [medium, setMedium] = useState(0);
  const [hard, setHard] = useState(0);
  const [total, setTotal] = useState(0);

  fetch("https://leetcode-stats-api.herokuapp.com/texture_11")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network issue");
      }
      return response.json;
    })
    .then((data) => {
        setEasy(data.totalEasy)
        setMedium(data.totalMedium)
        setHard(data.totalHard)
        setTotal(data.totalSolved)
    });
*/
  return (
    <>
      <div className="text-left p-10">
        <h1 className="text-2xl">
          <u>Coding Profiles</u>
        </h1>
        <div className="flex flex-col">
          <Card
            sx={{
              borderColor: "gray",
              borderWidth: "3px",
              width: "26%",
              borderRadius: "30px",
              height: "20%",

              marginTop: "15px",

              backfaceVisibility: "hidden",
              "@media (max-width: 600px)": {
                width: "80%",
                height: "60%",
              },
            }}
          >
            <CardContent sx={{ backgroundColor: "gray" }}>
              <div className="flex flex-row xsm:gap-0 items-center justify-center gap-3">
                <h2 className="text-center">LeetCode Statistics</h2>
                <div>
                  <a href="https://leetcode.com/u/texture_11/ " target="_blank">
                    <img
                      src={"/static/images/global.png"}
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col   items-center">
                  <div className="rounded-full xsm:p-2 border-black border-2 p-4 w-fit bg-orange-800">
                    Easy
                  </div>
                  <div>63</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full border-black border-2 p-4 w-fit bg-orange-800">
                    Medium
                  </div>
                  <div>116</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full border-black border-2 p-4 w-fit bg-orange-800">
                    Hard
                  </div>
                  <div>28</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card
            sx={{
              borderColor: "gray",
              borderWidth: "3px",
              width: "26%",
              borderRadius: "30px",
              height: "20%",

              marginTop: "15px",
              margin: "auto",
              backfaceVisibility: "hidden",
              "@media (max-width: 600px)": {
                width: "80%",
                height: "60%",
                marginTop: "12px",
              },
            }}
          >
            <CardContent sx={{ backgroundColor: "gray" }}>
              <div className="flex flex-row items-center justify-center gap-3">
                <h2 className="text-center">CodeForces Statistics</h2>
                <div>
                  <a
                    href="https://codeforces.com/profile/Ayush_11"
                    target="_blank"
                  >
                    <img
                      src={"/static/images/global.png"}
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-col    items-center">
                <div className="rounded-full border-black border-2 p-4 w-fit bg-orange-800">
                  Total Problems Solved
                </div>
                <div>112</div>
              </div>
            </CardContent>
          </Card>
          <Card
            sx={{
              borderColor: "gray",
              borderWidth: "3px",
              width: "26%",
              borderRadius: "30px",
              height: "20%",
              marginLeft: "auto",

              backfaceVisibility: "hidden",
              "@media (max-width: 600px)": {
                width: "80%",
                height: "60%",
                marginTop: "12px",
              },
            }}
          >
            <CardContent sx={{ backgroundColor: "gray" }}>
              <div className="flex flex-row items-center justify-center gap-3">
                <h2 className="text-center">CodeStudio Statistics</h2>
                <div>
                  <a
                    href="https://www.naukri.com/code360/profile/40558f4e-526d-4f60-8b63-ba9eae763d98 "
                    target="_blank"
                  >
                    <img
                      src={"static/images/global.png"}
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col    items-center">
                <div className="rounded-full border-black border-2 p-4 w-fit bg-orange-800">
                  Total Problems Solved
                </div>
                <div>973</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <a href="/src/assets/Ayush_Resume.pdf" download>
          {" "}
          <button className="border-2 xsm:mt-10 bg-gray-800 p-4 text-white rounded-2xl border-emerald-900">
            Download Resume
          </button>
        </a>
      </div>
      <br></br>
    </>
  );
}

export default CodingProfiles;
