cronAdd('find_matches', '*/1 * * * *', () => {
    const demos = $http.send({
        url: 'http://quad.quakeworld.com.br:28000/demo_filenames.txt',
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        timeout: 120, // in seconds
    })

    const test = demos.split('\n')
    $app.logger().info(test)
})
