export default {
  created () {
    if (process.client) {
      console.warn(this.notice);
    }
  },

  data () {
    return {
      notice: '\n'
        + '███████╗████████╗ ██████╗ ██████╗     If somebody asked you to copy and\n'
        + '██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗    paste something in here, they are\n'
        + '███████╗   ██║   ██║   ██║██████╔╝    most likely trying to steal your\n'
        + '╚════██║   ██║   ██║   ██║██╔═══╝     account. Don\'t do it, seriously.\n'
        + '███████║   ██║   ╚██████╔╝██║             – Your friends at Peerhaven\n'
        + '╚══════╝   ╚═╝    ╚═════╝ ╚═╝         \n\n'
    };
  }
};
