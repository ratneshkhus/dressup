import React, { useEffect, useState, Suspense } from 'react'
import "./profile.css"
import axios from "axios"

import { FiEdit2, FiEyeOff, FiLogOut, FiMoreVertical } from "react-icons/fi";
import { FaEye, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
const Ordershow = React.lazy(() => import('./Ordershow'));
import LoaderAni from '../../componants/LoaderAni';

export default function Profile() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [profilemenu, setprofilemenu] = useState(false);
  const [profileupdate, setprofileupdate] = useState(false);
  const [orderdata, setOrderdata] = useState([]);

  const [user, setUser] = useState({});

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://codsoft-dressupproject.vercel.app/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data);
        console.log(response.data);
      } catch (err) {
        console.error('Error fetching user information:', err);
      }
    };
    fetchUser();
    loadOrderdata();
  }, []);

  const loadOrderdata = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://codsoft-dressupproject.vercel.app/orderdatahistory', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setOrderdata(response.data);
      console.log(response.data);
    } catch (err) {
      console.error('Error fetching user information:', err);
    }
  };
  // console.log(orderdata.products);

  const logout = () => {
    localStorage.removeItem('token')
    const token = localStorage.getItem('token');
    console.log(token);
    window.location.href = '/login';

  }

  const handleProfileMenu = () => {
    setprofilemenu(!profilemenu);
    console.log("handleProfileMenu clicked ! : ");
  }
  const handleProfileupdate = () => {
    setprofileupdate(!profileupdate)
    console.log("handleProfileupdate clicked ! : ");
  }

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('https://codsoft-dressupproject.vercel.app/updateuser', user, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUser(response.data);
    } catch (err) {
      console.error('Error updating user information:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  if (!user) {
    return <LoaderAni />
  }


  return (
    <>
      <section className='formwrapper' style={{ height: "fit-content" }}>
        <div className="form_container_but_profile">
          <div className="header_desgin_Of_profile">
            <div className="profile_circle">
              <FaRegUserCircle fontSize={"1.8rem"} />

            </div>
            <div className="forminputareas_but_profile" style={{ width: "90%" }}>
              <h4>{user.username}</h4>
              {/* <span>owner</span> */}
            </div>
            <div className="moreicon_profile">
              <FiMoreVertical fontSize={"1.2rem"} onClick={handleProfileMenu} />

              <div className={profilemenu ? "ProfileMenu" : "ProfileMenuclose"}>

                <div className='ProfileMenu-options' onClick={handleProfileupdate}>
                  {!profileupdate ?
                    <><FiEdit2 fontSize={"1rem"} /> edit</> :
                    <><MdOutlineCancel fontSize={"1.1rem"} /> cancel</>}
                </div>

                <div className='ProfileMenu-options' onClick={logout}>
                  <FiLogOut fontSize={"1.1rem"} />logout</div>
              </div>
            </div>
          </div>
          <form style={{ marginTop: "20px", backgroundColor: "none" }}>
            <div className="formcontainer_but_profile">
              <div className="forminputareas_but_profile">
                <h4>User name</h4>
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  readOnly={!profileupdate}
                  onChange={handleInputChange}

                />
              </div>
              <div className="forminputareas_but_profile">
                <h4>Email</h4>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  readOnly={!profileupdate}
                  onChange={handleInputChange}

                />
              </div>
              <div className="forminputareas_but_profile">
                <h4>Mobile</h4>
                <input
                  type="number"
                  name='Mobile'
                  value={user.mobile}
                  readOnly={!profileupdate}
                  onChange={handleInputChange}


                />
              </div>
              {profileupdate &&
                <div className="forminputareas_but_profile" style={{ position: "relative" }}>
                  <h4>Password</h4>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    value={user.password}
                    readOnly={!profileupdate}
                    onChange={handleInputChange}

                  />
                  <div onClick={togglePasswordVisibility} className='eyeof_password' style={{ cursor: 'pointer' }}>
                    {passwordVisible ? <FiEyeOff /> : <FaEye />}
                  </div>
                </div>
              }
              <div className="forminputareas_but_profile row_span_for_2" >
                <h4>address</h4>
                <textarea
                  name="address"
                  id="address"
                  value={user.address}
                  readOnly={!profileupdate}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              {profileupdate &&
                <div className="forminputareas_but_profile row_span_for_2">
                  <input
                    type="submit"
                    name='submit'
                    value={"Update Profile"}
                    style={{ background: "#9B5FFC", color: "white" }}
                    onClick={handleUpdate}
                  />
                </div>
              }
            </div>

          </form>
        </div>
        <section className="tableSection">
          <div className="holder_Table">
            <h3>Order History</h3>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Total Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>

                <Suspense fallback={<LoaderAni />}>
                    <Ordershow orderdata={orderdata} />
                </Suspense>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </>
  )
}
