import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  queryRecord() {
    return this.ajax(this.urlForQuery(), 'GET', { unauthenticated: true }).then(resp => {
      resp.id = resp.request_id;
      return resp;
    });
  },
  urlForQuery() {
    // TODO
    // return this.buildURL() + `/replication/${mode}/status`;
    return this.buildURL() + `/replication/performance/status`;
  },
});
