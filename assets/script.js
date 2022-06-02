// modal showup 
const rideModal = document.getElementById('rideModal')
rideModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget

    // Update the modal's destination

    const modalBodyInput1 = exampleModal.querySelector('#destination')
    modalBodyInput1.value = destination;

    // Update the modal's start-point

    const modalBodyInput2 = exampleModal.querySelector('#start-point')
    modalBodyInput2.value = startPoint;
})


