import React from "react";
import "../style.scss";

const Team = () => {
  return (
    <div className="team">
      <div className="teamcont">
        <div className="teambox">
          <h3>ISPLATA ODMAH!</h3>
          <p>
            Otkupljene automobile isplaćujemo odmah i to na licu mjesta, a otkup
            vršimo na području cijele Republike Hrvatske.
          </p>
        </div>
        <div className="teambox">
          <h3>OTKUP VOZILA</h3>
          <p>
            Imate auto, a ne znate što bi s njim? Kontaktirajte nas na broj{" "}
            <a href="tel:+385955407662">
              <b>+385 95 5407 662</b>
            </a>{" "}
            i otkupit ćemo ga po većoj cijeni od ostalih.
          </p>
        </div>
        <div className="teambox">
          <h3>TROŠKOVI PRIJENOSA</h3>
          <p>
            Kod nas se ne morate brinuti o troškovima prijenosa! Sve troškove
            snosimo mi!
          </p>
        </div>
        <div className="teambox">
          <h3>ŠTO OTKUPLJUJEMO</h3>
          <p>
            Otkupljujemo sva vozila, novija i starija, bez obzira na godište,
            model ili marku.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
