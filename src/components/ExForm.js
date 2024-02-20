import "./ExForm.css"

const ExForm = ({handleCharge, charge, amount, handleAmount, handleSubmit, edit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label>항목</label>
                    <input type="text" 
                    className="form-control"
                    placeholder="예) 파프리카"
                    id="charge"
                    name="charge"
                    value={charge}
                    onChange={handleCharge}
                    ></input>
                </div>
                <div className="form-group">
                    <label>금액</label>
                    <input type="number" 
                    className="form-control"
                    placeholder="예)2500"
                    id="amount"
                    value={amount}
                    onChange={handleAmount}
                    ></input>
                </div>
            </div>
            <button type="submit" className="btn submit-btn">
                {edit? "수정" : "제출"}
            </button>
        </form>
    )
}

export default ExForm