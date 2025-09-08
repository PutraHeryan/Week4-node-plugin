const cowsay = require('cowsay');
const figlet = require('figlet');
const dayjs = require('dayjs');

require('dayjs/locale/id');
dayjs.locale('id');

async function main() {
  const chalk = (await import('chalk')).default;
  const gradient = (await import('gradient-string')).default;
  const boxen = (await import('boxen')).default;

  const args = process.argv.slice(2);
  const fullName = args[0] || 'Putra Heryan G.P.';
  const nim = args[1] || 'F1D022087';
  const motivationalMessage = 'Lebih baik memikirkan masa depan, daripada memikirkan masa lalu yang tidak bisa diubah.';
  const coolGradient = gradient('cyan', 'blue');
  const titleGradient = gradient('#ff6ec4', '#7873f5');

  const header =
    chalk.bold(coolGradient('<=== Biodata Mahasiswa ===>')) +
    `\n` +
    `${chalk.hex('#FFD700').bold('Nama:')} ${chalk.whiteBright(fullName)}` +
    `\n` +
    `${chalk.hex('#FFD700').bold('NIM :')} ${chalk.whiteBright(nim)}`;

  const asciiArtName = figlet.textSync(fullName, {
    font: 'Standard',
  });
  const styledAsciiArt = titleGradient(asciiArtName);

  const catMessage = cowsay.say({
    text: motivationalMessage,
    f: 'cat',
    e: 'oO',
    T: 'U ',
  });
  const styledCatMessage = chalk.yellow(catMessage);

  const currentTime = dayjs().format('dddd, D MMMM YYYY | HH:mm:ss');
  const styledTime = chalk.green.italic(`Waktu : ${currentTime}`);

  const finalOutput = [
    header,
    styledAsciiArt,
    styledCatMessage,
    styledTime,
  ].join('\n\n');

  console.log(
    boxen(finalOutput, {
      padding: 1,
      margin: 1,
      borderStyle: 'double',
      borderColor: 'magenta',
      title: 'Tugas Week 4',
      titleAlignment: 'center',
      textAlignment: 'center',
      float: 'center',
    })
  );
}

main();