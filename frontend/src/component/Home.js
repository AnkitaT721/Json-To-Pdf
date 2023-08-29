import React from "react";

const Home = () => {
  return (
    <>
      <section className="student">
        <div className="student-form">
          <h2 className="form-title">Student Data</h2>
          <form>
            <p>
              Name:
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                //   value={user.name}
                //   onChange={handleInputs}
                placeholder="Name"
              />
            </p>

            <p>
              Major:
              <input
                type="text"
                name="major"
                id="major"
                autoComplete="off"
                //   value={user.email}
                //   onChange={handleInputs}
                placeholder="Major"
              />
            </p>

            <p className="address">
              Address:
              <input
                type="text"
                name="state"
                id="state"
                autoComplete="off"
                //   value={user.phone}
                //   onChange={handleInputs}
                placeholder="State"
              />
              <input
                type="number"
                name="zip"
                id="zip"
                autoComplete="off"
                //   value={user.work}
                //   onChange={handleInputs}
                placeholder="ZipCode"
              />
              <input
                type="text"
                name="address_1"
                id="address_1"
                autoComplete="off"
                //   value={user.password}
                //   onChange={handleInputs}
                placeholder="Address Line 1"
              />
              <input
                type="text"
                name="address_2"
                id="address_2"
                autoComplete="off"
                //   value={user.cpassword}
                //   onChange={handleInputs}
                placeholder="Address Line 2"
              />
              <input
                type="text"
                name="city"
                id="city"
                //   value="Register"
                //   onClick={PostData} //connect
                placeholder="City"
              />
            </p>

            <input
              type="submit"
              name="submit"
              id="submit"
              className="form-submit"
              value="Submit"
              //   onClick={PostData}
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
