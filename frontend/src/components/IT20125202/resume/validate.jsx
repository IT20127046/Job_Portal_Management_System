import swal from 'sweetalert';

const validate = (obj) => {

    // console.log(obj);
    if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(obj.email)) {
        // alert('Please enter a valid email address');
        swal("Please enter a valid email address", "", "info");
        return false;
    }
    else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(obj.mobile)) {
        // alert('Please enter a valid mobile number');
        swal("Please enter a valid mobile number", "", "info");
        return false;
    }

    return true;
}

export default validate;