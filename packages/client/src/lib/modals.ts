import { goto } from "$app/navigation"
import PremiumModal from "../components/PremiumModal.svelte"
import { hideModal, showModal } from "../stores/modalStore"


export const openPremiumModal = () => {
    showModal({
        title: "LockIn Premium",
        content: PremiumModal,
        buttons: [
            {
                text: "No, thanks",
                onClick: () => hideModal()
            },
            {
                text: "Continue to payment",
                className: "btn-secondary",
                onClick: () => {
                    goto('/premium')
                }
            }
        ]
    })
}