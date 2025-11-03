

function Topbar() {
    return (
        <div>
            <div className="container-flid bg-dark text-light pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                            <div className="left d-flex gap-3">
                                <p><i className="bi bi-telephone-inbound me-2"></i>1234567890</p>
                                <p><i className="bi bi-envelope me-2"></i>bistrobliss@mail.com</p>
                            </div>
                            <div className="right d-flex gap-1">
                                <i class="bi bi-twitter"></i>
                                <i class="bi bi-facebook"></i>
                                <i class="bi bi-instagram"></i>
                                <i class="bi bi-github"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
