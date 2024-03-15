
function App() {


  return (
    <>
      <div id="main">
        <div className="box">
          <div className="text">
            <div className="heading">
              COVID-19 Vaccination Got Easier With, <span>Vaccination.ng</span>
            </div>
            <div className="content">
              <p>Vaccination.ng will help you find the nearest
                centre for vaccination, in all 36 states in Nigeria.</p>
            </div>
          </div>

          <div className="img">  </div>

          <div className="btn">
            <button className="btn-1">Get Vaccine</button>
            <button className="btn-2">Help Centre</button>
          </div>
        </div>

        <div className="form">
          <div className="data">
            <div className="location"><svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.969238" width="49.9615" height="50" rx="10" fill="#C4C4C4" fill-opacity="0.1" />
              <path d="M37.1914 22.5C37.1914 31.25 25.95 38.75 25.95 38.75C25.95 38.75 14.7087 31.25 14.7087 22.5C14.7087 19.5163 15.893 16.6548 18.0012 14.545C20.1094 12.4353 22.9686 11.25 25.95 11.25C28.9314 11.25 31.7907 12.4353 33.8989 14.545C36.007 16.6548 37.1914 19.5163 37.1914 22.5Z" stroke="#17C2EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25.95 26.25C28.0195 26.25 29.6971 24.5711 29.6971 22.5C29.6971 20.4289 28.0195 18.75 25.95 18.75C23.8805 18.75 22.2029 20.4289 22.2029 22.5C22.2029 24.5711 23.8805 26.25 25.95 26.25Z" stroke="#17C2EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
              <div className="address">
                <h3>Location</h3>
                <p>Ikeja Lagos, Nigeria</p>
              </div>
            </div>
            <div className="calendar">
              <div className="location"><svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.68692" width="49.9615" height="50" rx="10" fill="#C4C4C4" fill-opacity="0.1" />
                <path d="M34.411 15H16.9244C15.5448 15 14.4263 16.1193 14.4263 17.5V35C14.4263 36.3807 15.5448 37.5 16.9244 37.5H34.411C35.7906 37.5 36.909 36.3807 36.909 35V17.5C36.909 16.1193 35.7906 15 34.411 15Z" stroke="#17C2EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M30.6638 12.5V17.5" stroke="#17C2EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.6715 12.5V17.5" stroke="#17C2EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.4263 22.5H36.909" stroke="#17C2EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
                <div className="date">
                  <h3>Date</h3>
                  <p>29 February, 2022</p>
                </div>
              </div>
            </div>
            <div className="type">
              <div className="location"><svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.424622" width="49.9615" height="50" rx="10" fill="#C4C4C4" fill-opacity="0.1" />
                <path d="M25.4054 37.5C25.4054 37.5 35.3977 32.5 35.3977 25V16.25L25.4054 12.5L15.4131 16.25V25C15.4131 32.5 25.4054 37.5 25.4054 37.5Z" stroke="#17C2EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
                <div className="address">
                  <h3>Vaccine Type</h3>
                  <p>Mordena</p>
                </div>
              </div>
            </div>
          </div>
          <button className="btn-3">Submit</button>
        </div>
      </div>

      <div className="box-2">
        <div className="data-2">
          <div className="paragraph">
            <p>Check your COVID-19 result on our Database</p>
          </div>

          <div className="input-box">
            <input className="input-1" type="text" placeholder="Okeowo" />
            <input type="text" placeholder="NIK Number" />
          </div>
          <button className="btn-4">Check</button>
        </div>
      </div>
    </>
  )
}

export default App
