import html2pdf from 'html2pdf.js'
import { toast } from 'vue3-toastify'

export function downloadAsPdf(id, filename) {
    let el = document.getElementById(id)

    const options = {
        margin: 10,
        filename,
        image: {
            type: 'jpeg',
            quality: 0.98
        },
        html2canvas: {
            scale: 2,
            useCORS: true
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    }

    const msg = 'Download\'s started!'

    html2pdf().set(options).from(el).save().then(() => toast.success(msg))
}
