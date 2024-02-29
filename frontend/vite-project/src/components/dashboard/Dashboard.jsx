import { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
export default function Dashboard() {

  const [employer,setEmployer] = useState(0)
  const [admin,setAdmin] = useState(0)
  const [users,setUsers] = useState(0)
  // const [members,setMembers] = useState(0)

  const fetchAllDetails = async () =>{
       const response1 = await axios.get("http://localhost:8000/add")
       setEmployer(response1.data.total)
       const response2 = await axios.get("http://localhost:8000/add")
       setAdmin(response2.data.total)
       const response3 = await axios.get("http://localhost:8000/add")
       setUsers(response3.data.total)
  }
  useEffect(function(){
        fetchAllDetails()
  },[])

  const members = admin + users + employer
  return (
    <>
      <div className="continer-fluid">
        <div className="row">
          {/* 1st column */}
          <div className="col-2 p-5">
            <div className="d-flex align-items-center">
              <p className="fw-bolder text-capitalize">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>{" "}
                profile
              </p>
            </div>
            <p className="fw-bolder text-capitalize">stats</p>
            <p className="fw-bolder text-capitalize">admin</p>
            <p className="fw-bolder text-capitalize">manage users</p>
          </div>
          {/* 2nd column */}
          <div className="col-10 p-3 shadow-sm">
            {/* 1st row */}
            <div className="row">
              {/* user info block */}
              <h5 className="text-dark text-uppercase m-3">user info</h5>
              <div className="col-10 my-3 mx-1 d-flex ">
                {/* 1 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">{members}</h3>
                  <p className="text-white text-center text-capitalize">
                    Total members
                  </p>
                </div>
                {/* 2 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">55</h3>
                  <p className="text-white text-center text-capitalize">
                    Admin
                  </p>
                </div>
                {/* 3 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">{employer}</h3>
                  <p className="text-white text-center text-capitalize">
                    employer
                  </p>
                </div>
                {/* 4 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">55</h3>
                  <p className="text-white text-center text-capitalize">
                    Users
                  </p>
                </div>
              </div>
            </div>
            {/* 2nd row */}

            <div className="row">
              {/* job info block */}
              <h5 className="text-dark text-uppercase m-3">job info</h5>
              <div className="col-10 my-3 mx-1 d-flex ">
                {/* 1 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">55</h3>
                  <p className="text-white text-center text-capitalize">
                    Total members
                  </p>
                </div>
                {/* 2 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">55</h3>
                  <p className="text-white text-center text-capitalize">
                    Total members
                  </p>
                </div>
                {/* 3 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">55</h3>
                  <p className="text-white text-center text-capitalize">
                    Total members
                  </p>
                </div>
                {/* 4 block */}
                <div
                  className="bg-primary m-3 p-4 rounded-3 shadow-lg boxGradient"
                  style={{ width: "50%", height: "80%" }}
                >
                  <h3 className="text-white text-center">55</h3>
                  <p className="text-white text-center text-capitalize">
                    Total members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
