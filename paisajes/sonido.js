function playSound() {


    userStartAudio();

    let note = random(['Fb4', 'G4', 'B5']);
    // note velocity (volume, from 0 to 1)
    let velocity = random();
    // time from now (in seconds)
    let time = 0;
    // note duration (in seconds)
    let dur = 1 / 6;

    synth.play(note, velocity, time, dur);

}