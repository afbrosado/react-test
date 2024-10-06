import React, {useState} from "react";

const BootStrapSwitch = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleSwitchChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="row">
            <div className="col-6" style={{background: "red"}}>
                <span>Hello World!</span>
            </div>
            <div className="col-6" style={{background: "green"}}>
                <div className="custom-control custom-switch">
                    <input type="checkbox"
                           className="custom-control-input"
                           id="customSwitch1"
                           checked={isChecked}
                           onChange={handleSwitchChange}
                    />
                    <label className="custom-control-label" htmlFor="customSwitch1">Toggle this switch element</label>
                </div>
            </div>
        </div>
    )
}

export default BootStrapSwitch;