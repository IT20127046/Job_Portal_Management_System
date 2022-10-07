import React, { useEffect } from 'react';
import AdminNavBar from '../../IT20128036/admin/AdminNavBar';
import axios from 'axios';
import jsPDF from 'jspdf';
import logo from '../../../images/reportLogo.PNG';
import { PieChart } from 'react-minimal-pie-chart';
import RightSidePanel from '../../IT20128036/admin/slideBar';

function Report() {

    const [isLoading, setLoading] = React.useState(true);
    const [Applications, setApplications] = React.useState([]);
    const [Pending, setPending] = React.useState([{}]);
    const [Accepted, setAccepted] = React.useState([{}]);
    const [Rejected, setRejected] = React.useState([{}]);

    useEffect(() => {
        document.title = "Application Reports";

        axios.get('http://localhost:5000/applications').then(res => {
            if (res.data.success) {
                setApplications(res.data.exsitingApplications);
                setLoading(false);
            }
        })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                } else if (error.request) {
                    console.log(error.request);
                } else if (error.message) {
                    console.log(error.message);
                }
            })

        setPending(Applications.filter((application) => application.status === "Pending"));
        setAccepted(Applications.filter((application) => application.status === "Accepted"));
        setRejected(Applications.filter((application) => application.status === "Rejected"));

    }, [Applications]);

    const pdfGenerate = () => {
        var doc = new jsPDF('portrait', 'px', 'a4', false);

        doc.addImage(logo, 'PNG', 20, 10, 70, 70);
        doc.setFont("times");
        doc.setFontSize(25);
        doc.text(225, 50, "Application Report", { renderingMode: 'fillThenStroke', align: 'center', baseline: 'middle' });
        doc.line(0, 90, 450, 90);
        doc.setFontSize(12);
        doc.text(420, 100, `Generatd Date: ${new Date().toLocaleDateString()}`, { align: 'right' });
        doc.setFontSize(15);
        doc.text(20, 150, `      This report is based on the applications that was submitted through the portal from ${new Date(Applications[0].appliedDate).toString()} to ${new Date()}. \n \n(NOTE: This report is based on the overall application submissions and not related to any company.)`, { align: 'left', maxWidth: 400 });
        doc.setFont("times", "bold");
        doc.text(20, 240, 'Summary:', { align: 'left' });
        doc.setFont("times", "normal");
        doc.setFontSize(13);
        doc.text(30, 260, `- Total applications submitted through the portal :           ${Applications.length}`);
        doc.text(30, 280, `- Total accepted applications through the portal  :            ${Accepted.length}`);
        doc.text(30, 300, `- Total rejected applications through the portal   :            ${Rejected.length}`);
        doc.text(30, 320, `- Total pending applications through the portal   :            ${Pending.length}`);
        doc.setFontSize(20);
        doc.setFont("times", "bold");
        doc.text(225, 400, `Response percentage`, { baseline: 'middle', align: 'center' });
        doc.setTextColor(0, 0, 255);
        doc.text(225, 420, `${(((Accepted.length + Rejected.length) / Applications.length) * 100).toFixed(2)}%`, { baseline: 'middle', align: 'center' });
        doc.setTextColor(0, 0, 0);
        doc.text(225, 460, `Accepted rate`, { baseline: 'middle', align: 'center' });
        doc.setTextColor(0, 204, 0);
        doc.text(225, 480, `${((Accepted.length / Applications.length) * 100).toFixed(2)}%`, { baseline: 'middle', align: 'center' });
        doc.save('report.pdf');
    }

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div className='container' style={{ textAlign: 'center' }}>
            <br />
            <AdminNavBar />
            <div className="container">
                <div className='row'>
                    <div className='col-sm-3'>
                        <RightSidePanel />
                    </div>
                    <div className='col-sm-9'>
                        <div className='row'>
                            <div>
                                <h1>Applciation Reports</h1>
                                <br />
                                <br />
                                <br />
                                <button
                                    className='btn btn-dark'
                                    onClick={pdfGenerate}>
                                    Generate Report
                                </button>
                                <br />
                                <br />
                                <div className='container' style={{ backgroundColor: '#F5F5F5', width: '1000px', textAlign: 'left' }}>
                                    <PieChart
                                        radius={PieChart.defaultProps.radius - 20}
                                        viewBoxSize={[100, 100]}
                                        segmentsShift={(index) => (index === 0 ? 1 : 1.2)}
                                        label={({ dataEntry }) => dataEntry.title}
                                        labelPosition={60}
                                        labelStyle={{ fontSize: '3px', fill: '#000', opacity: 0.75 }}
                                        data={[
                                            { title: 'Rejected', value: Rejected.length, color: '#E55451' },
                                            { title: 'Pending', value: Pending.length, color: '#F3E5AB' },
                                            { title: 'Accepted', value: Accepted.length, color: '#90EE90' },

                                        ]}
                                    />
                                    <label style={{ background: '#90EE90', width: '100px', height: '15px' }} /> Accepted Applications<br />
                                    <label style={{ background: '#F3E5AB', width: '100px', height: '15px' }} /> Pending Applications<br />
                                    <label style={{ background: '#E55451', width: '100px', height: '15px' }} /> Rejected Applciations<br />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Report