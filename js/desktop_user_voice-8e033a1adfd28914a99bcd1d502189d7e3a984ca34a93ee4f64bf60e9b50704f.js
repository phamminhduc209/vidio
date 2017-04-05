UserVoice = window.UserVoice || [],
    function() {
        var e = document.createElement("script");
        e.type = "text/javascript", e.async = !0, e.src = "//widget.uservoice.com/4ytWDLfbTdoqxqdJYrQiaw.js";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    }(), UserVoice.push(["set", {
        accent_color: "#448dd6",
        trigger_color: "white",
        trigger_background_color: "#448dd6",
        strings: {
            contact_menu_label: "Kirim kami pesan",
            smartvote_menu_label: "Bantu kami memutuskan apa yang perlu kami buat berikutnya",
            contact_title: "Kirim kami pesan",
            contact_message_placeholder: "Beri kami masukan atau perlu bantuan?",
            contact_skip_instant_answers_button: "Lewati dan kirim pesan",
            contact_details_title: "Kami perlu",
            contact_submit_button: "Ok kirim",
            contact_success_title: "Pesan terkirim!",
            contact_success_body: "Kami akan menghubungi.",
            smartvote_title: "Apa yang perlu kami tambahkan selanjutnya? ",
            post_suggestion_menu_label: "Buat ide sendiri",
            smartvote_pick_button: "Pick",
            smartvote_subscribe_button: "Pick + Subscribe",
            suggestion_subscribe_title: "Great stuff!",
            suggestion_subscribe_body: "Kamu ingin mengupdate tentang ide ini? ",
            smartvote_success_title: "Your pick",
            post_suggestion_details_title: "Kami perlu",
            instant_answers_title: "Apakah artikel ini membantu?",
            instant_answers_related_articles_label: "Artkel terkait",
            instant_answers_related_suggestions_label: "Ide terkait",
            email_address_label: "Alamat email kamu",
            email_address_placeholder: "Alamat email"
        }
    }]), UserVoice.push(["identify", {}]), UserVoice.push(["addTrigger", {
        mode: "contact",
        trigger_position: "bottom-right"
    }]), UserVoice.push(["autoprompt", {}]);