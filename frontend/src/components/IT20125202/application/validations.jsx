const validateApplication = (obj) => {

    // console.log(obj);
    
    if (obj.vacancyNo === '' || obj.companyId === '' || obj.campanyName === '' || obj.applicantId === '' || obj.jobTitle === '') {
        alert('Something wend wrong.. Please try again');
        return false;
    }
    else if (obj.applicantFirstName === '' || obj.applicantLastName === '' || obj.applicantEmail === '' || obj.applicantPhone === '' || obj.coverLetter === '') {
        alert('Please fill all the required fields');
        return false;
    }
    else if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(obj.applicantEmail)) {
        alert('Please enter a valid email address');
        return false;
    }
    else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(obj.applicantPhone)) {
        alert('Please enter a valid mobile number');
        return false;
    }

    return true;
}

export default validateApplication;