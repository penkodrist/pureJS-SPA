document.addEventListener("DOMContentLoaded", function () {
    const packButtons = document.querySelectorAll(".tabButton");
    const SPAComponent = document.querySelector(".spaContainer");
    const SPAComponentsStorage = document.querySelector(".spaComponentsStorage");

    let currentPackInfo = null;

    packButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const buttonLabel = button.textContent.trim();

            const packInfo = Array.from(SPAComponentsStorage.querySelectorAll(".allDiscDiv")).find(function (info) {
                return info.querySelector(".nameHeader").textContent === buttonLabel;
            });

            if (packInfo) {
                if (currentPackInfo !== packInfo) {
                    if (currentPackInfo) {
                        currentPackInfo.classList.add('spaClosing')
                        setTimeout(function() {
                            SPAComponentsStorage.append(currentPackInfo);
                            currentPackInfo.classList.remove('spaClosing')
                        },300);

                    }

                        setTimeout(function() {
                            SPAComponent.innerHTML = '';
                            SPAComponent.append(packInfo);
                            currentPackInfo = packInfo;
                            currentPackInfo.classList.add('spaOpening')
                        },300);

                } else {
                    SPAComponentsStorage.append(currentPackInfo);
                    currentPackInfo = null;
                }
            }
        });

        if(button.classList.contains("active")) {
            button.click();
        }
    });
});