import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="gradient-bg-blue py-5 position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="display-3 fw-bold text-gray-900 lh-sm">
                  India's most powerful
                  <span className="d-block text-blue-600">Mobile Tracking</span>
                  <span className="d-block">Application</span>
                </h1>
                
                <p className="fs-5 text-gray-600 lh-base">
                  Built to help you track family members, monitor employees, and secure your business with advanced GPS tracking technology.
                </p>

                <div className="bg-warning bg-opacity-25 border-start border-warning border-4 p-3 rounded-end">
                  <p className="fs-5 fw-semibold text-gray-900 mb-0">
                    <span className="text-warning">Connect your existing mobile SIM</span><br />
                    or track any device remotely
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link 
                  to="/register"
                  className="btn bg-blue-600 text-white px-4 py-3 rounded-pill fs-5 fw-semibold hover-bg-blue-700 text-decoration-none text-center"
                >
                  Register for Trial
                </Link>
                <Link 
                  to="/pricing"
                  className="btn btn-outline-primary px-4 py-3 rounded-pill fs-5 fw-semibold text-center text-decoration-none"
                  style={{ borderColor: '#2563eb', color: '#2563eb' }}
                >
                  Plans & Pricing
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDUwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InB1cnBsZUdyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzY5MWE5OTtzdG9wLW9wYWNpdHk6MSIgLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojOWMzMTkyO3N0b3Atb3BhY2l0eToxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI3B1cnBsZUdyYWRpZW50KSIgcng9IjIwIi8+Cjx0ZXh0IHg9IjI1MCIgeT0iODAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Xb3JsZCdzIG1vc3QgcG93ZXJmdWw8L3RleHQ+Cjx0ZXh0IHg9IjI1MCIgeT0iMTMwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TW9iaWxlIFRyYWNraW5nPC90ZXh0Pgo8dGV4dCB4PSIyNTAiIHk9IjE4MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFwcGxpY2F0aW9uPC90ZXh0PgoKPCEtLSBDaGVja21hcmsgLS0+CjxyZWN0IHg9IjMwIiB5PSIyMjAiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0iIzEwYjk4MSIgcng9IjMiLz4KPHA+PHBhdGggZD0iTTM3IDIzMkw0MiAyMzdMNTAgMjI5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3A+Cjx0ZXh0IHg9IjcwIiB5PSIyNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiPk1hZGUgZXhjbHVzaXZlbHkgZm9yIEZhbWlseSw8L3RleHQ+Cjx0ZXh0IHg9IjcwIiB5PSIyNjAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiPkVkdWNhdGlvbiwgRW1wbG95ZWUgJmFtcDsgQnVzaW5lc3MgdXNlPC90ZXh0PgoKPCEtLSBDaGVja21hcmsgLS0+CjxyZWN0IHg9IjMwIiB5PSIyODAiIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0iIzEwYjk4MSIgcng9IjMiLz4KPHA+PHBhdGggZD0iTTM3IDI5Mkw0MiAyOTdMNTAgMjg5IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3A+Cjx0ZXh0IHg9IjcwIiB5PSIzMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiPjd4IGJldHRlciB0aGFuIGEgYnVzaW5lc3Mgd2l0aGluIG9uZSB3ZWVrITwvdGV4dD4KCjwhLS0gUHJpY2UgQmFkZ2UgLS0+CjxjaXJjbGUgY3g9IjQwMCIgY3k9IjI4MCIgcj0iNDAiIGZpbGw9IiNmZmQ3MDAiIHN0cm9rZT0iI2Y1OTUwZiIgc3Ryb2tlLXdpZHRoPSIzIi8+Cjx0ZXh0IHg9IjQwMCIgeT0iMjc1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+4oK5Mjk5PC90ZXh0Pgo8dGV4dCB4PSI0MDAiIHk9IjI5MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSJibGFjayIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cGVyIHllYXI8L3RleHQ+CgoKPCEtLSBQaG9uZSBNb2NrdXAgLS0+CjxyZWN0IHg9IjE4MCIgeT0iMzQwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIyMCIgZmlsbD0iIzM3NDE1MSIgcng9IjIwIi8+CjxyZWN0IHg9IjE5MCIgeT0iMzUwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjIwMCIgZmlsbD0id2hpdGUiIHJ4PSIxNSIvPgoKPCEtLSBBbG1vZGVzayBMb2dvIG9uIFBob25lIC0tPgo8cmVjdCB4PSIyMjAiIHk9IjM4MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjRUY0NDQ0IiByeD0iOCIvPgo8Y2lyY2xlIGN4PSIyMzAiIGN5PSIzOTUiIHI9IjMiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjI0MCIgY3k9IjM5NSIgcj0iMyIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMjUwIiBjeT0iMzk1IiByPSIzIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSIyNTAiIHk9IjQzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzFENEVEOCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QUxNT0RFU0s8L3RleHQ+CgoKPCEtLSBHUFMgSWNvbiAtLT4KPGNpcmNsZSBjeD0iMjUwIiBjeT0iNDcwIiByPSIyNSIgZmlsbD0iIzI1NjNlYiIvPgo8Y2lyY2xlIGN4PSIyNTAiIGN5PSI0NzAiIHI9IjgiIGZpbGw9IndoaXRlIi8+Cgo8IS0tIEZlYXR1cmUgSWNvbnMgLS0+CjwhLS0gUmVhbC1UaW1lIFRyYWNraW5nIC0tPgo8Y2lyY2xlIGN4PSI4MCIgY3k9IjQ2MCIgcj0iMjAiIGZpbGw9IiMxMGI5ODEiLz4KPHA+PHBhdGggZD0iTTc1IDQ1NUw4MCA0NjBMODUgNDU1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3A+Cjx0ZXh0IHg9IjgwIiB5PSI0ODUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJlYWwtVGltZTwvdGV4dD4KPHRleHQgeD0iODAiIHk9IjQ5OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TGl2ZSBUcmFja2luZzwvdGV4dD4KCjwhLS0gUHJpdmFjeSAmIFNlY3VyaXR5IC0tPgo8Y2lyY2xlIGN4PSI0MjAiIGN5PSI0NjAiIHI9IjIwIiBmaWxsPSIjZmY5NTAwIi8+CjxyZWN0IHg9IjQxMyIgeT0iNDUzIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgcng9IjIiLz4KPHRleHQgeD0iNDIwIiB5PSI0ODUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlByaXZhY3kgJmFtcDs8L3RleHQ+Cjx0ZXh0IHg9IjQyMCIgeT0iNDk4IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5TZWN1cml0eSBDb250cm9sczwvdGV4dD4KCjwhLS0gRW1lcmdlbmN5IENhbGwgLS0+CjxjaXJjbGUgY3g9IjgwIiBjeT0iNTQwIiByPSIyMCIgZmlsbD0iI2VmNDQ0NCIvPgo8Y2lyY2xlIGN4PSI4MCIgY3k9IjU0MCIgcj0iOCIgZmlsbD0id2hpdGUiLz4KPHRleHQgeD0iODAiIHk9IjU2NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RW1lcmdlbmN5PC90ZXh0Pgo8dGV4dCB4PSI4MCIgeT0iNTc4IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DYWxsPC90ZXh0PgoKPCEtLSBBZGRyZXNzIEZpbmRlciAtLT4KPGNpcmNsZSBjeD0iNDIwIiBjeT0iNTQwIiByPSIyMCIgZmlsbD0iIzEwYjk4MSIvPgo8Y2lyY2xlIGN4PSI0MjAiIGN5PSI1NDAiIHI9IjgiIGZpbGw9IndoaXRlIi8+Cjx0ZXh0IHg9IjQyMCIgeT0iNTY1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BZGRyZXNzPC90ZXh0Pgo8dGV4dCB4PSI0MjAiIHk9IjU3OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RmluZGVyPC90ZXh0PgoKPCEtLSBXaGF0c0FwcCAtLT4KPGNpcmNsZSBjeD0iMTUwIiBjeT0iNTQwIiByPSIyMCIgZmlsbD0iIzI1ZDM2NiIvPgo8Y2lyY2xlIGN4PSIxNTAiIGN5PSI1NDAiIHI9IjgiIGZpbGw9IndoaXRlIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iNTY1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5XaGF0c0FwcDwvdGV4dD4KPHRleHQgeD0iMTUwIiB5PSI1NzgiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlICZhbXA7IEFkZHJlc3M8L3RleHQ+CgoKPCEtLSBCYXR0ZXJ5IC0tPgo8Y2lyY2xlIGN4PSIzNTAiIGN5PSI1NDAiIHI9IjIwIiBmaWxsPSIjMTBiOTgxIi8+CjxyZWN0IHg9IjM0MyIgeT0iNTMzIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgcng9IjIiLz4KPHRleHQgeD0iMzUwIiB5PSI1NjUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJhdHRlcnkgJmFtcDs8L3RleHQ+Cjx0ZXh0IHg9IjM1MCIgeT0iNTc4IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Db25uZWN0aXZpdHkgU3RhdHVzPC90ZXh0Pgo8L3N2Zz4K" 
                alt="Almodesk Mobile Tracking App Features" 
                className="img-fluid rounded-custom-xl shadow-custom-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;