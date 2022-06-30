export default {
    MaintainanceMode: function () {
            let dt = new Date;
            let currentTime = dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()

            if(dt.getHours() === 14 && (dt.getMinutes() >= 26 && dt.getMinutes() < 60) && dt.getMinutes() > 0) {
                // console.log('Under maintainance')
                return true
            } else {
                // console.log('Normal mode')
                return false
            }
        }
    }
    